# Feature: Sample
#   # Scenario: Visit Login Page of FMS
#   #   Given I visit the FMS page
#   #   When I login as devtosd
#   #   Then I should be redirected to treasury operations

#   Scenario Outline: Implementation of data test IDs
#     Given I visit the FMS page
#     Then I check the "<module>" locators as "<user>"

#     Examples:
#       | user               | module              |
#       | MnemonicMaker      | dashBoard           |
#       | MnemonicChecker    | dashBoard           |
#       | transactionMaker   | dashBoard           |
#       | transactionChecker | dashBoard           |
#       | MnemonicMaker      | viewRequest         |
#       | MnemonicMaker      | customerMaintenance |
#       | MnemonicMaker      | viewMnemonic        |
#       | MnemonicMaker      | reports             |
#       | MnemonicChecker    | viewRequest         |
#       | MnemonicChecker    | customerMaintenance |
#       | MnemonicChecker    | viewMnemonic        |
#       | MnemonicChecker    | reports             |
#       | transactionMaker   | viewTransaction     |
#       | transactionMaker   | newTransaction      |
#       | transactionMaker   | clientVerify        |
#       | transactionMaker   | acceptAndreject     |
#       | transactionChecker | viewTransaction     |
#       | transactionChecker | viewProcessing      |
#       | transactionChecker | reports             |
