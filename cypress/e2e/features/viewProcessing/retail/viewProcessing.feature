# Feature: View for Processing module

#   Background:
#     Given I visit the FMS page
#     Given I login as devtosd

#   @R14
#   Scenario Outline: View for Processing for retail Module - <testID>
#     Given I am on "Treasury Operations" page
#     When I click "Retail" on View for Processing sidebar button
#       | assertions |
#       | exist      |
#       | be.visible |
#     Then I should be able to see for processing transactions
#     Then I "<action>" complete "<count>" transaction under "<mnemonic>" mnemonic with reference "<reference>" by "<maker>"

#     Examples:
#       | testID     | action | count | mnemonic  | reference | maker                |
#       | R14-US1-01 | manual |     1 | DEVBAURE8 |           | test fnam test lname |
#       | R14-US1-02 | manual |     1 | DEVBAURE8 |           | test fnam test lname |
