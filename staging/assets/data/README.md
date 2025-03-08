# Active Data Files

## IMPORTANT: These Files Are Used By The Application

The JSON files in this directory (`public/assets/data/`) are the **ACTIVE** files used by the running application.

### How Data Files Work in This Project

1. The application fetches data from this directory at runtime
2. Changes made to files in this directory will immediately affect the running application
3. Always make changes to these files when you want to update application data

### Testing Your Changes

After modifying any JSON file in this directory:

1. Save the file
2. The running application should automatically reload with your changes
3. If changes don't appear, try refreshing your browser or restarting the development server

### Files in This Directory

- `vendors.json` - Food and merchandise vendor information
- `experiences.json` - Tech experience details
- `map.json` - Map layout and marker information
- `schedule.json` - Event schedule information 