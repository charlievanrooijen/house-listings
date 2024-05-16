
export default {
    name: 'App',
    data() {
      return {
        isLoggedIn: false,
      };
    },
    methods: {
      login() {
        this.isLoggedIn = true;
      },
      logout() {
        this.isLoggedIn = false;
      }
    }
  };