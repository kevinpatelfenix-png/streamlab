# Wix migration notes

Source site: https://www.streamlabplatform.com/
Wix site name: Streamlab
Wix site ID: aee0aefa-75ea-4280-8525-56ad3301c882
Editor: Wix Studio
Published status: Published
Velo: Enabled

## Included

The public HTML/CSS/JavaScript and linked public resources downloaded by `wget` are in `site/`. Wix's Media Manager root-folder ZIP is in `media/wix-media-manager.zip`.

## Not included / cannot be represented as a normal static GitHub project

The Wix Studio editor project, proprietary page/layout metadata, Wix-hosted Velo source/runtime, installed-app internals, CMS/database content, forms submissions, member/account data, and server-side Wix features are not part of a public static mirror. Some resources may remain served from Wix URLs if the site uses protected or dynamically generated assets.

## Suggested next step

Use the static mirror as a visual/content reference, extract the nested media archive into a local `public/assets` directory, then rebuild interactive features and replace Wix-specific URLs and APIs in the chosen GitHub framework.
