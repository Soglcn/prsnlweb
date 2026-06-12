export function t(jsonData, language, key) {
  return jsonData?.[language]?.[key] || key;
}