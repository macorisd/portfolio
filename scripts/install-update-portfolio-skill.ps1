[CmdletBinding()]
param([switch]$Force)

$ErrorActionPreference = 'Stop'
$repoRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$workspaceRoot = (Resolve-Path -LiteralPath (Join-Path $repoRoot '..')).Path
$source = Join-Path $repoRoot '.agents\skills\update-portfolio'
$liveRoot = Join-Path $workspaceRoot '.agents\skills'
$destination = Join-Path $liveRoot 'update-portfolio'

if (-not (Test-Path -LiteralPath (Join-Path $source 'SKILL.md') -PathType Leaf)) {
    throw "Versioned update-portfolio skill not found: $source"
}
$safeRoot = [IO.Path]::GetFullPath($liveRoot).TrimEnd('\') + '\'
$safeTarget = [IO.Path]::GetFullPath($destination)
if (-not $safeTarget.StartsWith($safeRoot, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to install outside workspace skill directory: $safeTarget"
}
if ((Test-Path -LiteralPath $destination) -and -not $Force) {
    throw "Live skill already exists: $destination. Use -Force only to replace it intentionally."
}

New-Item -ItemType Directory -Path $destination -Force | Out-Null
& robocopy $source $destination /MIR /XJ /XD '__pycache__' /XF '*.pyc' '*.pyo' /R:2 /W:1 /NFL /NDL /NJH /NJS /NP
if ($LASTEXITCODE -ge 8) { throw "Skill installation failed: robocopy exit code $LASTEXITCODE" }
Write-Host "Live skill installed: $destination"
exit 0
