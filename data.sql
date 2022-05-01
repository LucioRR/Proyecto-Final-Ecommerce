-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-03-2022 a las 19:21:05
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mariacielo`
--

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Marena'),
(2, 'China Yuchai International Limited'),
(3, 'BioAmber Inc.');

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Bikinis'),
(2, 'Primeras Pieles');

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `value`) VALUES
(1, 'naranja muy sua', '#ddbea9'),
(2, 'verde lima bril', '#2be149'),
(3, 'azul desaturado', '#31576a');

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `url`) VALUES
(1, 'imagen-1644629459446-.jpg\r\n'),
(2, 'imagen-1644629459458-.jpg'),
(3, 'imagen-1644629459476-.jpg'),
(4, 'avatar-1645913758832-.jpg'),
(5, 'avatar-1645913639028-.jpg');

--
-- Volcado de datos para la tabla `imagesproducts`
--

INSERT INTO `imagesproducts` (`id`, `image`, `product`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `brand`, `description`, `price`, `active`) VALUES
(1, 'Amely - Cookie', 1, 1, 'Triángulo fijo con breteles regulables y pinza en bajo busto. En la parte trasera es para atar. Está todo forrado para que no se trasluzca nada. Las argollas y reguladores son color plata (no queman al exponerse al sol y no se oxidan al tomar contacto con el agua). Viene con taza soft desmontable! Modelo súper cómodo. Material: lycra opaca nude, 80% poliamida 20% elastano. (Fibra de LYCRA XTRA LIFE ®).', '7.50', 1),
(2, 'Wine - Dubouef Macon - Villages', 2, 2, 'Augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in', '4.00', 0),
(3, 'Jam - Raspberry,jar', 1, 3, 'Habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius', '5.92', 0);

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `size`) VALUES
(1, 'M'),
(2, 'S'),
(3, '2XL');

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id`, `size`, `stock`, `product`, `color`) VALUES
(1, 1, 46, 1, 1),
(2, 1, 53, 2, 2),
(3, 3, 23, 3, 3);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `hash`, `avatar`, `admin`, `active`) VALUES
(1, 'lucio@hotmail.net', '$2a$10$DpH724gLDf4ZgQEvYvHom.wO47S3yFiyobaycl45uJ4U.GrgXcSeW', 4, 1, 1),
(2, 'lucio@gmail.net', '$2a$10$d90qxspSDStlq5Hki9bX3OZBll5uXpgOI/X6emsc58RC86cORTf0S', 5, 0, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
