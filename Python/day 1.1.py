import random

print("Welcome to the Dice Game!")


player1_name = input("Enter Player 1's name: ")
player2_name = input("Enter Player 2's name: ")


rounds = int(input("Enter the number of rounds: "))

player1_score = 0
player2_score = 0


for round_number in range(1, rounds + 1):
    input(f"Round {round_number} - Press Enter to roll the dice...")

    player1_roll = random.randint(1, 6)
    player2_roll = random.randint(1, 6)

    print(f"{player1_name} rolled: {player1_roll}")
    print(f"{player2_name} rolled: {player2_roll}")


    winner = player1_name if player1_roll > player2_roll else player2_name if player2_roll > player1_roll else "It's a tie!"

    print(f"{winner} wins this round!")

    if winner == player1_name:
        player1_score += 1
    elif winner == player2_name:
        player2_score += 1


if player1_score > player2_score:
    print(f"{player1_name} wins the game!")
elif player2_score > player1_score:
    print(f"{player2_name} wins the game!")
else:
    print("It's a draw!")
