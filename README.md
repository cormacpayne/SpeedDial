# SpeedDial

SpeedDial is an extension for Chrome that allows users to bind "shortcuts" to the URL of websites in order to quickly navigate to them later.

For example, users can bind the shortcut `fb` to `https://www.facebook.com`, so when they open the extension, type `fb` in the **Use Shortcut** section, and press enter, a new tab containing Facebook will open in Chrome.

## Installing the Extension

To use this extension, follow the given steps:

1) Download the `.zip` file containing the contents of this repository. Click the **Clone or download** button in the top right corner of this repository, and select **Download ZIP**.

2) Once downloaded, extract the contents of the `.zip` file into a folder that can be easily found.

3) Navigate to `chrome://extensions` and make sure the **Developer mode** box in the top right corner is checked.

4) Click the button titled **Load unpacked extension** in the top left corner and select the folder containing the contents of the `.zip` file

## Using the Extension

The extension can be opened by using the shortcut `Ctrl + Shift + K` (`Command + Shift + K` for Mac users).

Once opened, there are four sections:

- **Use Shortcut**
- **Create Shortcut**
- **Remove Shortcut**
- **View Shortcuts**

## Create Shortcut

When using the extension for the first time, there will be no shortcuts saved locally, so you will need to create a few.

To do so, you will need to fill out the two textboxes in the **Create Shortcut** section. Following the Facebook example from above, you would type `fb` in the **Shortcut** textbox, and `https://www.facebook.com` in the **Site** textbox.

Once both textboxes have been filled, you can press enter to bind the shortcut to the website.

**Note**: the website provided will need the `https://www` prefix, or else it will not work (_e.g._, `facebook.com` will not work, it must be `https://www.facebook.com`)

### Use Shortcut

Once you have at least one shortcut set, you can now use the first section to navigate to a given website.

If you press `Ctrl + Shift + K`, the extension will open, and the focus will automatically be set to the **Shortcut** textbox in the **Use Shortcut** section at the top. You can then enter a shortcut and press enter. This will open a new tab containing the website that the shortcut is bound to.

For example, if `fb` is provided as the shortcut, Facebook will open a new tab upon enter being pressed.

### Remove Shortcut

If you ever need to remove a shortcut from your local list, you can do so in this section.

Enter the shortcut in the **Shortcut** textbox in the **Remove Shortcut** section, and press enter.

### View Shortcuts

If you ever need to see the full list of shortcuts you have created (as well as the websites they map to), you can click the **View** button in the **View Shortcuts** section at the bottom of the extension.

## TODO

- [ ] Use `.json` file to store shortcut mappings instead of `chrome.storage` library
- [ ] Completely change design of extension
    - Make it more clear what each section does
    - Viewing all shortcuts needs better UI
- [ ] Error checking
    - Add check for invalid URL format
    - Add check for shortcuts that do not exist
- [ ] Need introduction for first-time extension users