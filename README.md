# Publii Plugin: CSV Maker
A plugin to generate and manually edit custom CSV files directly from the Publii interface.

<p><img height="100" alt="publii plugin" title="Plugin icons" src="https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Easy-Htaccess/802bbe1ad69aafd209050b19b37371a913fe547f/.assets/thumbnail.svg"></p>

## Features

![Publii plugin screenshot](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-CSV-Maker/refs/heads/main/.assets/screen.png)

This plugin allows you to create and edit CSV files with ease, offering various customization options. Files can be saved either in the root directory or in the plugin's subfolder. Additionally, the plugin automatically processes delimiters typed within fields, ensuring that CSV standards are met. 

It’s the ideal solution for creating CSV files directly in Publii, eliminating the need for manual downloads and uploads.

## Installation and Usage

1. Download the `.zip` file of the latest plugin version from the [release page](https://github.com/gpsblues/Publii-Plugin-CSV-Maker/releases/).
2. Open Publii CMS and [install the plugin](https://getpublii.com/docs/plugins.html#installingplugins).
3. [Enable the plugin](https://getpublii.com/docs/plugins.html#enablingplugins).
4. Configure the plugin settings by clicking on its name.
5. Save and Sync your website to apply the changes.

## Settings

In the settings section, you can configure the fundamental parameters of the CSV file, including:

- **File name**: Define the name and type of the file.
- **Save location**: Choose one of the two available options:
  - Root directory of the site (`/`).
  - Plugin folder (`/input/media/plugin/csv-maker`).
- **Delimiter**: Specify the character to separate values in the CSV file.
- **Columns**: Set up to a maximum of 10 columns for your file.

## Data

This section allows you to directly edit the values of your CSV file. You can switch between two display modes for easier editing:

- **Compact view ON**:  Displays values side-by-side for a quick overview.
- **Compact view OFF**: Displays each value on a separate row, which is especially useful for handling longer content.

### Handling Delimiters

The plugin automatically escapes any delimiters typed within fields to ensure compliance with CSV standards. For example:

- If your delimiter is a semicolon (`;`), and a value in a field includes it, the plugin will automatically handle it by wrapping the value in double quotes (`"value;with;delimiter"`).
- Double quotes within a field are also escaped by doubling them (`"value""with""quotes"`).

This ensures that your CSV file is correctly formatted and can be used seamlessly in other applications.

## Disclaimer

This plugin is an unofficial extension for [Publii CMS](https://getpublii.com/). While every effort has been made to ensure its reliability, I do not assume responsibility for any issues or malfunctions that may occur while using this plugin. 

For official Publii resources, please visit the [Publii CMS Official Repository](https://marketplace.getpublii.com/plugins/).
