import os
import base64
from PIL import Image, ImageDraw, ImageFilter

input_path = r"C:\Users\04680566108\.gemini\antigravity-ide\brain\360804f6-8b6f-4e87-8eb4-9b7e33637c48\.user_uploaded\media_1791902319816.png"
img = Image.open(input_path).convert("RGBA")

# Exact circle parameters
cx = 650.5
cy = 436.0
radius = 160.0

# We want a super clean, high-res result.
# Let's crop with a 4px margin around radius
margin = 6
crop_box = (
    int(cx - radius - margin),
    int(cy - radius - margin),
    int(cx + radius + margin),
    int(cy + radius + margin)
)

cropped = img.crop(crop_box)
crop_w, crop_h = cropped.size

# Upscale x4 with Lanczos for super crisp smooth anti-aliasing
scale = 4
up_w = crop_w * scale
up_h = crop_h * scale
upscaled = cropped.resize((up_w, up_h), Image.Resampling.LANCZOS)

# Create an anti-aliased circular alpha mask at high resolution
mask = Image.new("L", (up_w, up_h), 0)
draw = ImageDraw.Draw(mask)
mask_cx = up_w / 2.0
mask_cy = up_h / 2.0
mask_r = radius * scale + 1.5 # include the outer brown border ring completely

draw.ellipse(
    (mask_cx - mask_r, mask_cy - mask_r, mask_cx + mask_r, mask_cy + mask_r),
    fill=255
)

# Apply mask
upscaled.putalpha(mask)

# Resize down to 512x512 for a standard high-res logo
final_size = (512, 512)
final_logo = upscaled.resize(final_size, Image.Resampling.LANCZOS)

out_circle = r"c:\Users\04680566108\Documents\seu-pet-equilibrado-carroussel-1\public\pet-logo-circle.png"
out_avatar = r"c:\Users\04680566108\Documents\seu-pet-equilibrado-carroussel-1\public\innovary-logo-circle.png"
out_avatar2 = r"c:\Users\04680566108\Documents\seu-pet-equilibrado-carroussel-1\public\innovary-logo-avatar.png"

final_logo.save(out_circle, "PNG")
final_logo.save(out_avatar, "PNG")
final_logo.save(out_avatar2, "PNG")

print("Saved logo files to public/")

# Now generate base64 string for brandLogo.ts
with open(out_circle, "rb") as f:
    b64_data = base64.b64encode(f.read()).decode("utf-8")
    b64_url = f"data:image/png;base64,{b64_data}"

brand_logo_ts_content = f'''/**
 * Logotipo oficial do Seu Pet Equilibrado (@seupetequilibrado)
 * Brasão / Ícone circular oficial com o cão e o gato em harmonia.
 * Extraído da identidade visual oficial da marca.
 */
export const PET_LOGO_URL = '/pet-logo-circle.png';
export const INNOVARY_LOGO_URL = PET_LOGO_URL; // Compatibilidade retroativa
export const PET_LOGO_BASE64 = '{b64_url}';
export const INNOVARY_LOGO_BASE64 = PET_LOGO_BASE64;
'''

ts_path = r"c:\Users\04680566108\Documents\seu-pet-equilibrado-carroussel-1\src\lib\brandLogo.ts"
with open(ts_path, "w", encoding="utf-8") as f:
    f.write(brand_logo_ts_content)

print(f"Updated {ts_path} with new base64 and URLs.")
