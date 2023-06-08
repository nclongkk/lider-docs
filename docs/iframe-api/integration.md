---
sidebar_position: 2
---

# Integration

## Integrate LaaS using the Lider IFrame API

To enable the Lider Meet API in your application you must use the following JavaScript (JS) Lider Meet API library script and integrate it into your application:

```HTML
<script src="https://localhost:5001/public-sdk.js"></script>
```

## Prepare container

You also need to initiate a HTML container to embed Lider Iframe
An example div like it

```HTML
<div id="lider-container" style="width: 500px; height: 500px"></div>
```

## Creating the Lider Meet API object

After you have integrated the Meet API library and a container, you need to create a Lider Meet API object to define all the required information of the room which you want to provide in your website.

The Meet API object takes the following form:

```JS
lider = new LiderClient("lider-container");
```

The parameter to initiate LiderClient object is the <code>id</code> of the container which you have declared before. In this example we are using <code>lider-container</code> as a parameter of LiderClient object.

## Starting your first meeting

After create an instance of LiderClient class, you can start your first meeting with the method <code>join</code>.

```JS
  lider.join({
    token: "your_app_token", // Token of your app
    roomId: "roomId", // Room ID, this field is required and decide the room of your clients
    user: {
      username: "username", // Username of client
    },
  });
```

The example above is the way how you can join your meeting. Function join have a list of required parameters and optional parameters. See full attribute at the next article.
