# alt-to-title-firefox-extension

A Firefox extension to transform image alt tags to title tags, to allow accessibility debugging

What the extension should do ?
When a page is loaded, the extension should look at all images.
For all images with an alt tag, duplicate its content into a title tag
For all images without an alt tag, create a title tag with "no alt text"
In both cases, if a title tag is already present, it should be overwritten
Should the DOM be updated, the extension should run again against the new DOM
