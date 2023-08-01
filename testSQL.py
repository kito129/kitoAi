import psycopg2

# Replace these with your actual database connection details
db_config = {
    'host': 'localhost',
    'database': 'kitoAi',
    'user': 'kito',
    'password': '65255',
}

try:
    # Connect to the PostgreSQL database
    connection = psycopg2.connect(**db_config)

    # Create a cursor to interact with the database
    cursor = connection.cursor()

    # Get a list of all tables in the database
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public';")
    print(
        f"Tables: {cursor.rowcount}"
    )
    tables = cursor.fetchall()

    # Loop through each table and select all data from it
    for table in tables:
        table_name = table[0]
        print(f"Table: {table_name}")
        cursor.execute(f"SELECT * FROM {table_name};")
        data = cursor.fetchall()
        for row in data:
            print(row)

except psycopg2.Error as e:
    print("Error connecting to the database:", e)

finally:
    # Close the cursor and the connection
    if cursor:
        cursor.close()
    if connection:
        connection.close()