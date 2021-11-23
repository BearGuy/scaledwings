import axios from 'axios';

export default async function handler(req, res) {
  console.log(req.body);
	const { firstName, lastName, email, instagram, body_dir, body_part, placement, flash_id, type, price, description } = req.body;

  const calendly_results = await axios.post(
		`https://api.calendly.com/scheduling_links`,
		{
		  "max_event_count": 1,
		  "owner": `https://api.calendly.com/event_types/${process.env.CALENDLY_FLASH_BOOKING_EVENT_UID}`,
		  "owner_type": "EventType"
		},
		{
		  headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.CALENDLY_API_KEY}`
		  }
		}
  );

  // get calendly_results.data.resource.booking_url
  const { booking_url } = calendly_results.data.resource;

  const data = {
    "records": [
      {
        "fields": {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "instagram": instagram,
          "size": 'XS',
          "placement": `${body_dir} ${body_part} ${placement}`,
          "flash": [flash_id],
          "status": 'Incoming',
          "booking_url": booking_url,
          "type": type,
          "price": price,
          "description": description
        }
      }
    ]
  };

  // upload to airtable
  let results = await axios.post(
    `https://api.airtable.com/v0/appAE11Y9R7n8jKUn/Bookings`,
    data,
    {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
    }
  );

	res.status(201).json({ message: "Booking created successfully!" });
}