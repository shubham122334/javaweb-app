<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Service</title>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #e6f0e6;
            padding: 40px;
        }

        .container {
            background: #e3efe3;
            padding: 30px;
            border-left: 6px solid #b5b5b5;
            max-width: 700px;
        }

        h1 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 25px;
        }

        pre {
            background: #fff;
            padding: 20px;
            font-size: 16px;
            border-radius: 4px;
        }

        button {
            background: #0a9f55;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 20px;
        }

        button:hover {
            background: #087a43;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Typing text -->
    <h1 id="typingText"></h1>

    <pre>
public class Main{
    public static void main(String args[]){
        System.out.println("Hello, World!");
    }
}
    </pre>

    <button>Compile and Run Java</button>
</div>

<script>
    const text = "Hey, Compile and Run Java!";
    const speed = 120; // typing speed in ms
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typingText").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            // Restart typing after pause
            setTimeout(() => {
                document.getElementById("typingText").textContent = "";
                index = 0;
                typeEffect();
            }, 1500);
        }
    }

    typeEffect();
</script>

</body>
</html>
