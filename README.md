# IT.com Coding Assignment: Movies

## The Task

We have taken a truncated set of IMDB data and provided it as a part of this coding assignment. The task is to take the data provided a set of APIs that we have built and shared in in the [./server](./server) directory and build out a user interface for the application.

Flex your front end skills and show us what you've got! Have fun with the UI and show us your inner designer. Separate yourself from the pack.

## User Story

- A user will want to be able to interact on both a mobile screen as well as a larger device.
- A user will want to see the average rating and runtime of the movies in the data set.
- A user will want to be able to page through movies (ex. page 1 shows results 1-10, and page 2 shows 11-20 and so on).
- A user will want to search the set of movies by the title, genre, directors, or writers.
- A user will want to be able to click into a movie and view information about that movie (crew, rating, runtime).
- A user will want to be able to see information about the crew such as the movies that member has been a part of.
- A user will want to see the average rating and runtime of those movies on the crew member page.

## Goals

The goal of this exercise is to see how you handle the front end of an application from start to completion. We will need your help with our front end applications so we need to see how you deal with the browser and styling up web pages while taking into account things like browser quirks. 

We'll also be looking to see how you use computer science fundamentals to complete the assignment. Any insight you can provide as to why you've done what you have would be really useful. The decisions on which frameworks to use are up to you. Feel free to use something like `create-react-app` if that suites you.

Please add tests as you see fit.

## API

The server API will produce results like the following. Once you have gone into [./server](./server) directory and installed the dependencies (`npm i`), then you can run the server by running `npm run start`. The server will run on `https://localhost:3050/`. The data will be accessible directly off of the root path of the server via the endpoints described below. The server should allow any sources to access the endpoints.

These endpoints should drive your front end work from the server.

`GET /movies?offset=0&size=10&query=Shaws&sort=rating&order=desc` : paginated by offset and size, sorted by rating (default) or title, ordered by desc (default), and filtered by query

```json
{
  "page": 0,
  "total": 1,
  "avgRuntime": 142,
  "count": 1,
  "items": [
    {
      "id": "tt0111161",
      "title": "The Shawshank Redemption",
      "genres": ["drama"],
      "year": 1994,
      "runtime": 142,
      "rating": 9.3,
      "votes": 2182398,
      "directors": [
        {
          "id": "nm0001104",
          "name": "Frank Darabont",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0831387",
              "title": "Godzilla"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            }
          ]
        }
      ],
      "writers": [
        {
          "id": "nm0000175",
          "name": "Stephen King",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0081505",
              "title": "The Shining"
            },
            {
              "id": "tt1396484",
              "title": "It"
            },
            {
              "id": "tt0092005",
              "title": "Stand by Me"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            },
            {
              "id": "tt0450385",
              "title": "1408"
            },
            {
              "id": "tt0363988",
              "title": "Secret Window"
            }
          ]
        },
        {
          "id": "nm0001104",
          "name": "Frank Darabont",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0831387",
              "title": "Godzilla"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            }
          ]
        }
      ]
    }
  ]
}
```

`GET /movies/:movieId`

```json
{
  "page": 0,
  "total": 1,
  "avgRuntime": 142,
  "count": 1,
  "items": [
    {
      "id": "tt0111161",
      "title": "The Shawshank Redemption",
      "genres": ["drama"],
      "year": 1994,
      "runtime": 142,
      "rating": 9.3,
      "votes": 2182398,
      "directors": [
        {
          "id": "nm0001104",
          "name": "Frank Darabont",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0831387",
              "title": "Godzilla"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            }
          ]
        }
      ],
      "writers": [
        {
          "id": "nm0000175",
          "name": "Stephen King",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0081505",
              "title": "The Shining"
            },
            {
              "id": "tt1396484",
              "title": "It"
            },
            {
              "id": "tt0092005",
              "title": "Stand by Me"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            },
            {
              "id": "tt0450385",
              "title": "1408"
            },
            {
              "id": "tt0363988",
              "title": "Secret Window"
            }
          ]
        },
        {
          "id": "nm0001104",
          "name": "Frank Darabont",
          "movies": [
            {
              "id": "tt0111161",
              "title": "The Shawshank Redemption"
            },
            {
              "id": "tt0120689",
              "title": "The Green Mile"
            },
            {
              "id": "tt0831387",
              "title": "Godzilla"
            },
            {
              "id": "tt0884328",
              "title": "The Mist"
            }
          ]
        }
      ]
    }
  ]
}
```

`GET /crew/:crewId`

```json
{
  "id": "nm0001104",
  "name": "Frank Darabont",
  "movies": [
    {
      "id": "tt0111161",
      "title": "Shawshank Redemption"
    }
  ]
}
```
