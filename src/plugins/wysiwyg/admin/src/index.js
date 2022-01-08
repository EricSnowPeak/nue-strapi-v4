import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import PluginIcon from "./components/PluginIcon";

// import App from "./containers/App";
import Initializer from "./containers/Initializer";
const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
const name = pluginPkg.strapi.name;

import Wysiwyg from "./components/Wysiwyg";

export default {
  register(app) {
    console.log("app", app);
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: "My Plugin",
    //   },
    //   Component: async () => {
    //     const component = await import(
    //       /* webpackChunkName: "my-plugin-page" */ "./pages/HomePage"
    //     );

    //     return component;
    //   },
    // });

    app.addFields({ type: "wysiwyg", Component: Wysiwyg });

    app.registerPlugin({
      blockerComponent: null,
      blockerComponentProps: {},
      description: pluginDescription,
      initializer: Initializer,
      injectedComponents: [],
      isReady: false,
      isRequired: pluginPkg.strapi.required || false,
      layout: null,
      mainComponent: null,
      name,
      preventComponentRendering: false,
      // menu: {
      //   pluginsSectionLinks: [
      //     {
      //       destination: `/plugins/${pluginId}`,
      //       icon: PluginIcon,
      //       label: {
      //         id: `${pluginId}.plugin.name`,
      //         defaultMessage: name,
      //       },
      //       name,
      //       permissions: [
      //         // Uncomment to set the permissions of the plugin here
      //         // {
      //         //   action: '', // the action name should be plugins::plugin-name.actionType
      //         //   subject: null,
      //         // },
      //       ],
      //     },
      //   ],
      // },
      icon: PluginIcon,
      id: pluginId,
      name,
    });
  },
};
