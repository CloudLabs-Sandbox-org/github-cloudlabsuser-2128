MAX = 100

def calculate_sum(arr):
    """Calculate the sum of a list of numbers."""
    return sum(arr)

def get_integer_input(prompt, error_message="Invalid input. Please enter a valid integer."):
    """Prompt the user for an integer input with error handling."""
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print(error_message)

def main():
    try:
        # Get the number of elements
        n = get_integer_input("Enter the number of elements (1-100): ")
        if not 1 <= n <= MAX:
            print(f"Invalid input. Please provide a number between 1 and {MAX}.")
            return

        # Get the list of integers
        print(f"Enter {n} integers:")
        arr = [get_integer_input(f"Element {_ + 1}: ") for _ in range(n)]

        # Calculate and display the sum
        total = calculate_sum(arr)
        print("Sum of the numbers:", total)

    except KeyboardInterrupt:
        print("\nProgram terminated by user.")

if __name__ == "__main__":
    main()
