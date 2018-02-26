export const MENU_CHANGED = 'MENU_CHANGED';

export const menuChange = (id) => ({
  type: MENU_CHANGED,
  payload: id
});
