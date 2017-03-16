<?php header("HTTP/1.1 418 I'm a teapot"); ?>
<!doctype html>
<html>
<head>
<title>Sebastian Schrepfer, Software Engineer</title>
<meta name="description" content="</> The personal web site of Sebastian Schrepfer">
<style>
body,
html {
	margin: 0;
	padding: 0;
	background-color: #2f383d;
	color: #ffffff;
	height: 100%;
	width: 100%;
	font-family: "Roboto", sans-serif;
	user-select: none;
	-webkit-user-select: none;
	cursor: default;
}
a, a:link, a:visited, a:hover, a:active, a:focus {
	color: #ffffff;
	text-decoration: none;
}
header {
	background-color: #2a3237;
	height: 50%;
	position: relative;

}
header .error {
	font-family: "Roboto Mono", sans-serif;
	font-size: 60px;
	position: absolute;
	top: 25px;
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
	color: rgba(255,255,255,0.4);
}
header .error .fa-bug {
	margin-top: 0.1em;
	margin-right: -0.4em;
	font-size: 85%;
}
header .error > * {
	display: inline-block;
	vertical-align: middle;
}
header .name {
	font-weight: 300;
	font-size: 80px;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
}
main {
	height: 50%;
	position: relative;
}
main .title {
	color: #ff9a56;
	font-size: 50px;
	font-weight: 300;
	position: absolute;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
}
main .linkedin {
	display: inline-block;
	font-size: 32px;
	cursor: pointer;
	position: absolute;
	top: 130px;
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
	outline-color: #ff9a56;
}
main .linkedin:after {
	content: "";
	display: block;
	width: 2em;
	height: 2em;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
main .linkedin:focus:after {
	background-color: rgba(255, 154, 86, 0.14);
}

@media only screen and (max-width: 975px) {
	header .error {
		font-size: 6vw;
	}
	header .name {
		font-size: 8vw;
	}
	main .title {
		font-size: 5vw;
	}
	main .linkedin {
		font-size: 3.2vw;
	}
}
@media only screen and (max-height: 476px) {
	header .error {
		top: 5vh;
		font-size: 12vh;
	}
	header .name {
		font-size: 16vh;
		bottom: 2vh;
	}
	main .title {
		top: 2vh;
		font-size: 10vh;
	}
	main .linkedin {
		font-size: 6.4vh;
		top: 26vh;
	}
}
</style>
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300|Roboto:300,400,700" rel="stylesheet">
<script src="https://use.fontawesome.com/b4269b01c3.js"></script>
</head>

<body>

<header>
	<div class="error" title="Error 418: I'm a teapot.">
		<i class="fa fa-bug"></i>
		<span>418</span>
	</div>
	<div class="name">Sebastian Schrepfer</div>
</header>
<main>
	<div class="title">
		<i class="fa fa-code"></i>
		Software Engineer
	</div>
	<a tabindex="1" href="https://www.linkedin.com/in/sebastianschrepfer" class="linkedin">
		<i class="fa fa-linkedin"></i>
	</a>
</main>

</body>
</html>