export default function objectFilter(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
}
