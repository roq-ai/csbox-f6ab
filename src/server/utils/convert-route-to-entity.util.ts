const mapping: Record<string, string> = {
  assignments: 'assignment',
  courses: 'course',
  enrollments: 'enrollment',
  modules: 'module',
  organizations: 'organization',
  submissions: 'submission',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
