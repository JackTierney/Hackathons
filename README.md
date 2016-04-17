# Homeless Services Hub

## API
All API calls will receive responses of the following form:
```
{
  success: Boolean,
  data: {...}
}
```
The value of the `data` field is defined below for each endpoint.

### Providers
#### `GET /api/provider/{id?}`
If `id` is null, an array of objects is returned, one for each provider in the database. If `id` is provided, only one object is returned. Returned objects are of the form:
```
{
  id: <Number>,
  name: <String>,
}
```

#### `POST /api/provider/{id}`
Used to create of update a provider record. Request must have the following parameters:
```
{
  name: <String>,
  ...
}
```

#### `DELETE /api/provider/{id}`
Used to delete a provider record.

### Branches
#### `GET /api/branch/{id?}`
If `id` is null, an array of objects is returned, one for each branch. If `id` is provided, only one object is returned. Returned objects are of the form:
```
{
  id: <Number>,
  name: <String>
}
```
If `id` is null, the following query parameters are accepted to filter the results:
* `lat`: Latitude of origin
* `lng`: Longitude of origin
* `radius`: Distance (km) from origin within which to return results
* `services`: Type of services to return, comma separated list

#### `POST /api/branch/{id?}`

#### `DELETE /api/branch/{id?}`

```
GET    /api/provider/{name?}
POST   /api/provider/{name?}
DELETE /api/provider/{name?}

GET    /api/branch?radius=...&lat=...&lng=...&services=...
GET    /api/branch/{name?}
PUT    /api/branch/{name?}
POST   /api/branch/{name?}
DELETE /api/branch/{name?}

GET    /api/branch/{name?}/address
POST   /api/branch/{name?}/address

GET    /api/branch/{name?}/services
POST   /api/branch/{name?}/services

GET    /api/branch/{name?}/contacts
POST   /api/branch/{name?}/contacts

GET    /api/category/{name?}
POST   /api/category/{name?}

POST   /api/private/sms
```

## Views
```
GET    /update/{id?}?token=...
GET    /create/{id?}?token=...
```

# User Stories

![schema](./public/img/userstories_onpurpose.jpg)


# Database
## Schema
![schema](./public/img/schema.jpeg)
