       
      // function to format a timestamp, accepts the timestamp and an `options` object as parameters
      module.exports = (timestamp) => {
        // create month object
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      
        const dateObj = new Date(timestamp);
        const formattedMonth = months[dateObj.getMonth()];
      
        const day = dateObj.getDate();
      
        const year = dateObj.getFullYear();
        
        const formattedTimeStamp = `${formattedMonth} ${day}, ${year}`;
      
        return formattedTimeStamp;
      };
      