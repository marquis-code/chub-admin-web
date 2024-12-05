export function useConvertTimestamp(timestamp: any) {
  // Convert the Unix timestamp (milliseconds) to a JavaScript Date object
  const normalDate = computed(() => {
    return new Date(Number(timestamp));
  });

  return {
    normalDate,
  };
}
