export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({task, date}),
  })
  const item = await response.json();
  return mapServeritemToLocalItem(item);
}

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServeritemToLocalItem);
}

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}/completed`, {
    method: "PUT",
  })
  const item = await response.json();
  return mapServeritemToLocalItem(item);
}

export const deleteItemFromServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  const item = await response.json();
  return item._id;
}

const mapServeritemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    task: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedtAt: serverItem.updatedAt,
  }
}