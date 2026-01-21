export function shortAddress(
  address?: string | null,
  start: number = 6,
  end: number = 4,
): string {
  if (!address) return "";

  if (address.length <= start + end) return address;

  return `${address.slice(0, start)}...${address.slice(-end)}`;
}
