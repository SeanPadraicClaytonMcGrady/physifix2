# Physifix

Physifix treats your aches and pains with curated diagnostics & exercises. 

https://physifix.vercel.app/

# Features

- An interactive human model (only the rear hips & lower back have content at the moment)
- Curated diagnostics & videos
- OAuth (Although there is no benefit at the moment to signing in)

# Known bugs

- Halves of both bodies don't work: The SVG representing the front & rear human models uses a transformation of the complete image on one side to produce the picture of the other half. Unfortunately, this means that copied half isn't interactive.
- Sometimes the videos won't load. Supabase's free tier can take some time. Click on the Physifix logo at the top & try again after a few seconds.

# Future features:

- Bookmarking diagnostic videos
- Rating diagnostic videos
- Recommendations based on diagnostics
- More content for common injuries (shoulders, knees, ankles)
