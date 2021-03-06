﻿<?php
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0");
	header("Pragma: no-cache");
	header("Expires: Sat, 01 Jan 2000 05:00:00 GMT");
?>
<!doctype html>
<html>
<head>
<title>Sebastian Schrepfer</title>
<meta name="description" content="The personal web site of Sebastian Schrepfer, Software Engineer">
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400|Roboto:300,400,700" rel="stylesheet">
<link href="./style.css?filerev=1" rel="stylesheet">
<script src="https://use.fontawesome.com/b4269b01c3.js"></script>
</head>

<body>

<header>
	<div class="secure-password">
		<a href="#" class="secure-password-button" title="Generate a secure password">
			<i class="fa fa-unlock-alt"></i>
			<span>Generate Secure Password</span>
		</a>
		<div class="secure-password-options">
			<div class="option alphabet-complete">Abc</div>
			<div class="option alphabet-uppercase">ABC</div>
			<div class="option alphabet-special">A@+</div>
		</div>
		<span class="secure-password-output"></span>
	</div>
	
	<div class="name">Sebastian Schrepfer</div>
</header>
<main>
	<div class="title">
		<i class="fa fa-code"></i>
		Software Engineer
	</div>
	<a tabindex="1" href="https://www.linkedin.com/in/sebastianschrepfer" class="button linkedin" title="LinkedIn Profile">
		<i class="fa fa-linkedin"></i>
	</a>
	<a tabindex="2" href="http://stackoverflow.com/users/3233827/ssc-hrep3?tab=topactivity" class="button stackoverflow" title="Stack Overflow Profile">
		<i class="fa fa-stack-overflow"></i>
	</a>
	<div class="mail-wrapper">
		<a tabindex="3" href="#" class="button mail" title="Contact me">
			<i class="fa fa-envelope"></i>
		</a>
		<span class="mail-address">
			<span class="first"></span><span>&#64;</span><span class="last"></span>
		</span>
	</div>
</main>

<script type="text/javascript" src="./crypto.js?filerev=1"></script>
<script type="text/javascript" src="./email-address.js?filerev=1"></script>
<script type="text/javascript" src="./main.js?filerev=1"></script>
</body>
</html>