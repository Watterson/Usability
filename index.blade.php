<!DOCTYPE html>
<html>
	<head>
		<!-- This is a comment tag -->
		<meta charset="UTF-8" />
		<title>Experiment Page</title>
    <link href="{{ asset('css/amazon.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="jquery-2.2.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	</head>
	<body>
		<div class="header">
      <img src="{{url('/img/nav_bar.jpg')}}" >
		</div>
		<div class="body">
      <div class="sidebar">
          <img src="{{url('/img/sidebar.jpg')}}" >
      </div>
      <div class="main" >
        <div class="product-container" id="product1">
          <div class="image-container" id="productImage1">
              <img class="image" src="{{url('/img/kettle-one.jpg')}}" >
          </div>
          <div class="description-container">
            <p class="title">Electric Tea Kettle, Cordless Glass Pot 1.7 Liter, Stainless Steel Black Hot Water heater, Fast Boiling Teapot with Automatic Shut Off - LED Light, BPA-free Great For Home Kitchen & Office Use.</p>
            <p class="seller">by COSORI</p>
            <span><img class="star-rating" src="{{url('/img/star.png')}}" ></span>
            <span class="currency">$</span><span>205</span><span>99</span>
          </div>
        </div>
      </div>
    </div>

	</body>
</html>
