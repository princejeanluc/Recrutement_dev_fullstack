const tasks = [
  {
    id: "1",
    title: "Exemple de tache",
    completed: false,
    createdAt: new Date().toISOString()
  }
];

function listTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((t) => t.id === id) || null;
}

function createTask(task) {
  tasks.push(task);
  return task;
}

function updateTask(id, updates) {
  const task = getTaskById(id);
  if (!task) return null;
  Object.assign(task, updates);
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  const [removed] = tasks.splice(index, 1);
  return removed;
}

export {
  listTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
