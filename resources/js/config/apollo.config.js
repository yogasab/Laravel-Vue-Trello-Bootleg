import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    headers: {
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
            .content,
    },
    credentials: "include",
});
export default new VueApollo({
    defaultClient: apolloClient,
});
