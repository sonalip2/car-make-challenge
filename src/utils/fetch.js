const get = async (url, method) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
};
