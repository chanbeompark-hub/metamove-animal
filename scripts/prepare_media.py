from pathlib import Path
import shutil
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "media"
SOURCE = Path(r"C:\Users\박찬범\Downloads\메타무브자료\USB 지헌")
PHOTO_SOURCE = SOURCE / "지헌자료"

VIDEO = SOURCE / "KakaoTalk_20260712_212224437.mp4"
IMAGES = {
    "flow-poster.webp": PHOTO_SOURCE / "2XU-3235.jpg",
    "beast.webp": PHOTO_SOURCE / "2XU-3235.jpg",
    "control.webp": PHOTO_SOURCE / "2XU-3712.jpg",
    "movement.webp": PHOTO_SOURCE / "2XU-3963.jpg",
    "community.webp": PHOTO_SOURCE / "2XU-4533.jpg",
    "outdoor-community.webp": PHOTO_SOURCE / "P20240831_165802819_4968303F-A705-4774-9AE9-2893E7E6C80A.JPG",
}


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    if not VIDEO.exists():
        raise FileNotFoundError(VIDEO)
    shutil.copy2(VIDEO, OUTPUT / "flow-hero.mp4")

    for filename, source in IMAGES.items():
        if not source.exists():
            raise FileNotFoundError(source)
        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            image.save(OUTPUT / filename, "WEBP", quality=84, method=6)

    for path in sorted(OUTPUT.iterdir()):
        print(f"{path.name}: {path.stat().st_size / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    main()
