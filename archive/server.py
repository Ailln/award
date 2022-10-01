from flask import Flask, request, send_file
from PIL import Image, ImageDraw


app = Flask(__name__)


@app.route("/")
def index():
    arg = request.args
    l_text = arg.get("lt", "left")
    r_text = arg.get("rt", "right")
    margin = 4
    l_w = len(l_text)*6 + margin*2
    r_w = len(r_text)*6 + margin*2
    l_h = 12 + margin*2
    r_h = 12 + margin*2

    img_l = Image.new("RGBA", (l_w, l_h), "gray")
    img_r = Image.new("RGBA", (r_w, r_h), "orange")

    draw_l = ImageDraw.Draw(img_l)
    draw_l.text((margin, margin), l_text, fill="white")
    draw_r = ImageDraw.Draw(img_r)
    draw_r.text((margin, margin), r_text, fill="white")

    img = Image.new('RGBA', (l_w + r_w, max(l_h, r_h)))
    img.paste(img_l, (0, 0))
    img.paste(img_r, (l_w, 0))

    # 圆角
    mask = Image.new('L', img.size, color=0)
    draw = ImageDraw.Draw(mask)
    r = 14
    draw.ellipse((0, 0, r, r), fill=255)
    draw.ellipse((l_w + r_w-r, 0, l_w + r_w, r), fill=255)
    draw.ellipse((0, l_h-r, r, l_h), fill=255)
    draw.ellipse((l_w + r_w-r, l_h-r, l_w + r_w, l_h), fill=255)
    draw.rectangle((r/2, 0, l_w + r_w-(r/2), l_h), fill=255)
    draw.rectangle((0, r/2, l_w + r_w, l_h-(r/2)), fill=255)
    img.putalpha(mask)

    image_path = f"./{l_text}-{r_text}.png"
    img.save(image_path)
    return send_file(image_path)


if __name__ == "__main__":
    app.run(port=3001)
