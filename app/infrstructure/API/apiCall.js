import axios from 'axios';

export class apiCall {
    static getDataUsingSimpleGetCall = () => {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            alert('Finally called');
          });
      };

      static getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/1',
          );
          alert(JSON.stringify(response.data));
        } catch (error) {
          // handle error
          alert(error.message);
        }
      };

      static postDataUsingSimplePostCall = () => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
          .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
      };
    
      static multipleRequestsInSingleCall = () => {
        axios
          .all([
            axios
              .get('https://jsonplaceholder.typicode.com/posts/1')
              .then(function (response) {
                // handle success
                alert('Post 1 : ' + JSON.stringify(response.data));
              }),
            axios
              .get('https://jsonplaceholder.typicode.com/posts/2')
              .then(function (response) {
                // handle success
                alert('Post 2 : ' + JSON.stringify(response.data));
              }),
          ])
          .then(
            axios.spread(function (acct, perms) {
              // Both requests are now complete
              alert('Both requests are now complete');
            }),
          );
      };
   
}