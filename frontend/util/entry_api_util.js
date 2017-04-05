export const fetchEntries = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/entries'
  });
};

export const fetchEntry = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/entries/1'
  });
};

export const fetchMonths = () => {
  return $.ajax({
    method: "GET",
    url: `api/months`
  });
};

export const createEntry = (entry) => {
  return $.ajax({
    method: "POST",
    url: "api/entries",
    data: entry
  });
};
