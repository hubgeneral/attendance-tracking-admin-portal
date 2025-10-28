

export function formatDate(dateString: string) {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTime(timeString: string) {
  if (!timeString) return "N/A";
  return new Date(timeString).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
