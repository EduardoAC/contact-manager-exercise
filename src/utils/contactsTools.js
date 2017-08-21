export function getContactId(props) {
  return props.match && props.match.params && props.match.params.id
};

export function getContactFromState(state, props) {
  const id = getContactId(props);
  let contact = undefined;
  let index = -1;
  if (id) {
    index = state.contacts.index[id];
  }
  if (index >= 0) {
    contact = state.contacts.values[index];
  }
  return contact;
}

export function removeContact(array, contactId) {
  let values = array.slice();
  values.splice(index, 1);
  const index = values.reduce((a, c, i) => {
    a[c.id] = i;
    return a;
  }, {})
  return { index, values};
}
