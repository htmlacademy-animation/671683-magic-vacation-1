class Route {
  constructor({path, onInit = () => {}, onLeave = () => {}}) {
    this.path = path;
    this.onInit = onInit;
    this.onLeave = onLeave;
  }

  init() {
    this.onInit();
  }

  leave() {
    this.onLeave();
  }
}

export class Router {
  constructor(routeConfigList) {
    this.routes = routeConfigList.map((config) => new Route(config));
    this.currentPath = window.location.hash.slice(1);
    this.currentRoute = this.findRoute(this.currentPath);
    this.prevRoute = null;
  }

  init() {
    if (this.currentRoute) {
      this.currentRoute.init();
    }

    window.addEventListener(`popstate`, (event) => {
      this.currentPath = event.target.location.hash.slice(1);
      this.prevRoute = this.currentRoute;
      this.currentRoute = this.findRoute(this.currentPath);

      if (this.prevRoute) {
        this.prevRoute.leave();
      }

      if (this.currentRoute) {
        this.currentRoute.init();
      }
    });
  }

  findRoute(path) {
    return this.routes.find((route) => route.path === path);
  }
}
