export function normalizeErrors(errors, fieldTemplates): any {
  const normalizedErrors = {};
  if (Array.isArray(errors.fields)) {
    errors.fields.forEach((msg, index) => {
      const template = fieldTemplates[index];
      if (template && msg) {
        normalizedErrors[template.id] = [msg];
      }
    });
  }
  return normalizedErrors
}
