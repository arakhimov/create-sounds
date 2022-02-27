const UPDATED_MINUTES = 10;
const SECONDS_PER_MINUTE = 60;
const MSECONDS_PER_SECONDS = 1000;

export function isOutDate(date) {
  if (
    Date.now() - date >
    UPDATED_MINUTES * SECONDS_PER_MINUTE * MSECONDS_PER_SECONDS
  ) {
    return true;
  }
  return false;
}
