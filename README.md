# cloudflare-r2-upload-backend

## Routes:
- POST: localhost:3333/uploads
  - Body:
    - name: String
	- ContentType: String with ContentType of the file (video/mp4 | image/jpeg | image/png ...)
  - Returns
    - signedUrl: Url with the upload link
	- fileId: id of the file in the postgresql table (files)

- PUT: signedUrl
  - file:
    - file to upload

- GET: localhost:3333/uploads/:id
  - Return the url of the file with the :id



## Web
A simple form to upload the file