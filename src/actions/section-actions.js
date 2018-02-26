export const SECTION_CLICKED = 'SECTION_CLICKED';

export const sectionClicked = (menuLocation) => ({
  type: SECTION_CLICKED,
  payload: `Section was clicked while on ${menuLocation}`
});
