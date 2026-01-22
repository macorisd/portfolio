from typing import Tuple

# Common month mapping
MONTH_MAP = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12,
    'January': 1, 'February': 2, 'March': 3, 'April': 4, 
    'June': 6, 'July': 7, 'August': 8, 'September': 9, 
    'October': 10, 'November': 11, 'December': 12
}


def parse_date_string(date_str: str) -> Tuple[int, int]:
    """
    Parse a date string in format 'Mon YYYY' or 'Month YYYY' and return (year, month).
    Returns (0, 0) if parsing fails.
    """
    if not date_str or date_str in [None, "null", ""]:
        return (0, 0)
    
    try:
        parts = date_str.strip().split()
        if len(parts) >= 2:
            month_str = parts[0]
            year = int(parts[1])
            month = MONTH_MAP.get(month_str, 12)  # Default to December if not found
            return (year, month)
    except (ValueError, IndexError):
        pass
    
    return (0, 0)


def get_sorting_key_for_date(date_str: str, is_current: bool = False) -> Tuple[int, int]:
    """
    Get sorting key for a date string. Returns negative values for descending sort.
    If is_current is True, gives priority but still sorts by start date (most recent first).
    """
    year, month = parse_date_string(date_str) if date_str else (0, 0)
    
    if is_current:
        # Current items get priority (negative year offset) but still sort by actual start date
        # More recent start dates (higher year/month) should come first
        return (-9999, -year * 100 - month)  # e.g., Nov 2025 = -202511, Oct 2025 = -202510
    
    if year == 0 and month == 0:
        return (0, 0)  # Lowest priority for invalid dates
    
    return (-year, -month)  # Negative for descending order

