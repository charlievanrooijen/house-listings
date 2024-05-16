
export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Simulate a login by emitting an event to the parent component
        this.$emit('login');
        this.$router.push('/');
      }
    }
  };