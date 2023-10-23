var topKFrequent = function (nums, k) {
  const record = new Map();
  nums.forEach((num) => {
    record.get(num) ? record.set(num, record.get(num) + 1) : record.set(num, 1);
  });
  const sortedRecord = [...record.keys()].sort(
    (x, y) => record.get(y) - record.get(x)
  );
  return sortedRecord.slice(0, k);
};
