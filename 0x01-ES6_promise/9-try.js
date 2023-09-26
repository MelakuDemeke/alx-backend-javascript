export default async function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = await mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
