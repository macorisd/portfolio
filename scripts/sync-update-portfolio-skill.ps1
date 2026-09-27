[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$workspaceRoot = (Resolve-Path -LiteralPath (Join-Path $repoRoot '..')).Path
$source = Join-Path $workspaceRoot '.agents\skills\update-portfolio'
$mirrorRoot = Join-Path $repoRoot '.agents\skills'
$destination = Join-Path $mirrorRoot 'update-portfolio'

if (-not (Test-Path -LiteralPath (Join-Path $source 'SKILL.md') -PathType Leaf)) {
    throw "Live update-portfolio skill not found: $source"
}
$safeRoot = [IO.Path]::GetFullPath($mirrorRoot).TrimEnd('\') + '\'
$safeTarget = [IO.Path]::GetFullPath($destination)
if (-not $safeTarget.StartsWith($safeRoot, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to sync outside repository skill mirror: $safeTarget"
}

New-Item -ItemType Directory -Path $destination -Force | Out-Null
& robocopy $source $destination /MIR /XJ /XD '__pycache__' /XF '*.pyc' '*.pyo' /R:2 /W:1 /NFL /NDL /NJH /NJS /NP
if ($LASTEXITCODE -ge 8) { throw "Skill synchronization failed: robocopy exit code $LASTEXITCODE" }
Write-Host "Skill mirror updated: $destination"
exit 0
