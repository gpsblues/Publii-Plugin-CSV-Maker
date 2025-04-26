# Publii Plugin: CSV Maker
A plugin to generate and manually edit custom CSV files directly from the Publii interface.

<p><img height="100" alt="publii plugin" title="Plugin icons" src="https://raw.githubusercontent.com/gpsblues/Publii-Plugin-CSV-Maker/refs/heads/main/.assets/thumbnail.svg"></p>

## Features

![Publii plugin screenshot](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-CSV-Maker/refs/heads/main/.assets/screen.png)

This plugin enables you to effortlessly create and edit **simple CSV files** with various customization options. **Designed primarily for basic data structures** like geographical coordinates (name, latitude, longitude) for small maps or similar simple datasets, it supports **up to 10 columns** and **unlimited rows** of manually entered data. Files can be saved either in your site's root directory or in the plugin's dedicated subfolder. The plugin automatically handles delimiter characters within fields, ensuring proper CSV formatting compliance.

**Note:** This is a manual-entry-only solution - bulk import functionality is not included.

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
  - Plugin folder (`/media/plugin/csv-maker`).
- **Delimiter**: Specify the character to separate values in the CSV file.
- **Columns**: Set up to a maximum of 10 columns for your file.

## Data Management

This **manual-entry-only** section provides direct editing of your CSV values with two display modes for optimal workflow:

- **Compact view ON**: Displays values in a side-by-side layout for quick overview.
- **Compact view OFF**: Shows each value on a separate line, ideal for working with lengthy content.

**Perfect for**:
- Simple coordinate lists (name, lat, long)
- Basic contact information (city, name, phone, ...) 
- Small catalogs or inventories (product, price, SKU, ...)
- Other straightforward tabular data

### Handling Delimiters

The plugin automatically escapes any delimiters typed within fields to ensure compliance with CSV standards. For example:

- If your delimiter is a semicolon (`;`), and a value in a field includes it, the plugin will automatically handle it by wrapping the value in double quotes (`"value;with;delimiter"`).
- Double quotes within a field are also escaped by doubling them (`"value""with""quotes"`).

This ensures that your CSV file is correctly formatted and can be used seamlessly in other applications.

### Remove Plugin or File

Deactivating or removing the plugin does not delete the previously created CSV file. If you want to remove it, you have two options:

- **Delete rows via the plugin interface**: Remove all rows from the plugin interface and sync your website. This will generate an empty CSV file.  
- **Manual deletion**: Deactivate or remove the plugin, manually delete the created files and sync your website. You will need to delete the file from the server and, if you selected the root folder as the output location, the copy located in `Publii/Tools & Plugins/File Manager/root`.

This ensures that no residual files remain on your system after removal. 

## Disclaimer

This plugin is an unofficial extension for [Publii CMS](https://getpublii.com/). While every effort has been made to ensure its reliability, I do not assume responsibility for any issues or malfunctions that may occur while using this plugin. 

For official Publii resources, please visit the [Publii CMS Official Repository](https://marketplace.getpublii.com/plugins/).
