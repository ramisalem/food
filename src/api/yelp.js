import axios  from 'axios'; 

const BASE =  "https://api.yelp.com/v3/businesses"

export default axios.create({
    baseURL: `${BASE}` ,
    headers: {
        Authorization: 'Bearer KJArCnyKDayJXEYPoZvb_1568LuEe2UBTK5SZE1ZYydxD0MXhOxf5NzbliW0Z8_wastf8LHM2nKYrCxUXVM1BK9_cFO2gKkfBB5uFiaD0IryWMJZ0i_no4O7GcF9XXYx'
    }
});



