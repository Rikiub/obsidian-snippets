<style>
    :root {
        --image-float-margin: .8em;
        --image-float-max-width: 50%;
    }

    img {
        width: 300px;
        height: auto;
    }

    .circle,
    .square {
        aspect-ratio: 1;
        object-fit: cover;
    }

    .circle,
    .round {
        border-radius: 100%;
    }

    .banner {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 3 / 1;
    }

    .center {
        display: block;
        margin: auto;
        width: 300px;
    }

    .left {
        float: left;
        margin-right: var(--image-float-margin);
        margin-bottom: var(--image-float-margin);
    }

    .right {
        float: right;
        margin-left: var(--image-float-margin);
        margin-bottom: var(--image-float-margin);
    }
</style>

# Image Shapes

To apply, in your embedded images add a vertical slash (`|`) a write your desired style.

## TL;DR

| Attribute | Example |
| :--: | -- |
| `Original Image` | <img src="./your-image.png"> |
| | |
| [`square`](#square) | <img src="./your-image.png" class="square"> |
| | |
| [`round`](#rounded) | <img src="./your-image.png" class="round"> |
| [`circle`](#rounded) | <img src="./your-image.png" class="circle"> |
| | |
| [`banner`](#banner) | <img src="./your-image.png" class="banner"> |
| | |
| [`center`](#center) | Align image to center |
| [`left`](#left) | Align image to left |
| [`right`](#right)  | Align image to right |
| <p style="margin: 0 75px"></p>  | |

## Square

> Key: `square`

<img src="./your-image.png" class="square">

## Rounded

> Key: `round`

<img src="./your-image.png" class="round">

> Rounded shape respecting width and height.

---

> Key: `circle`

<img src="./your-image.png" class="circle">

> Combination between [round](#rounded) and [square](#square).

## Banner

> Key: `banner`

<img src="./your-image.png" class="banner">

> Rectangle shape with full width.

## Align

### Center

> Key: `center`

<img src="./your-image.png" class="center">

### Left

> Key: `left`

<img src="./your-image.png" class="left">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus.

Quisque malesuada feugiat mi, eu laoreet purus auctor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor dolor. Quisque pellentesque, massa quis convallis volutpat, urna massa pretium lorem, eget vestibulum sapien diam nec mi. Aenean sagittis libero vitae fermentum vestibulum. Quisque scelerisque urna sed feugiat bibendum. Sed ac vestibulum dolor. Maecenas eget venenatis purus, in euismod purus. In feugiat lacus quis leo hendrerit, sit amet sodales erat auctor.

### Right

> Key: `right`

<img src="./your-image.png" class="right">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elementum viverra. Morbi non accumsan tortor. Vivamus et neque purus. Ut gravida ut ligula sit amet congue. Sed malesuada augue at dui feugiat, auctor lobortis orci finibus.

Quisque malesuada feugiat mi, eu laoreet purus auctor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor dolor. Quisque pellentesque, massa quis convallis volutpat, urna massa pretium lorem, eget vestibulum sapien diam nec mi. Aenean sagittis libero vitae fermentum vestibulum. Quisque scelerisque urna sed feugiat bibendum. Sed ac vestibulum dolor. Maecenas eget venenatis purus, in euismod purus. In feugiat lacus quis leo hendrerit, sit amet sodales erat auctor.